import PyPDF2
from dateutil.parser import parse
import glob, os
import sys
import csv


os.chdir("veg_prices/")
count = 0
with open('Snakegourd.csv', 'w', newline='') as csvfile:
    fieldnames = ['Date', 'Price']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    for file in glob.glob("*.pdf"):
        print(file)
        count +=1
        pdf_file = open(file, 'rb')
        read_pdf = PyPDF2.PdfFileReader(pdf_file)
        number_of_pages = read_pdf.getNumPages()
        page = read_pdf.getPage(1)
        page_a = read_pdf.getPage(0)
        page_a_content = page_a.extractText().split('\n')
        page_content = page.extractText().split('\n')

        veg = ""
        # find vegetable price
        if 'Snake gourd' in page_content:
            veg_index = page_content.index('Snake gourd')
            veg = page_content[veg_index -1]
        else:
            page = read_pdf.getPage(0)
            page_content = page.extractText().split('\n')
            veg_index = page_content.index('Snake gourd')
            veg = page_content[veg_index -1]

        print("price :" + veg)
        print(page_a_content)


        # find report date and change format
        index = 0
        date = ""
        if  ' Developments - ' not in page_a_content and 'A Summary of Price' in page_a_content:
            index = page_a_content.index('A Summary of Price')
            du_date = page_a_content[index+2]
            p_date = du_date.replace(' Developments - ', '')
            date = parse(p_date)
        elif 'A Summary of Price' not in page_a_content and 'Daily Price Report' in page_a_content:
            index = page_a_content.index('Daily Price Report')
            du_date = page_a_content[index + 1]
            p_date = du_date.replace('A Summary of Price Developments - ', '')
            date = parse(p_date)
        elif ' Developments -' not in page_a_content and 'A Summary of Price' not in page_a_content:
            date = ""
            parse_date = ','.join(filter(str.isdigit, file))
            yr = ''.join(parse_date.split(',')[:4])
            mo = ''.join(parse_date.split(',')[4:6])
            dy = ''.join(parse_date.split(',')[6:8])
            try:
                date = parse(yr + "/" + mo + "/" + dy)
            except ValueError:
                yr = ''.join(parse_date.split(',')[4:8])
                mo = ''.join(parse_date.split(',')[2:4])
                dy = ''.join(parse_date.split(',')[:2])
                date = parse(yr + "/" + mo + "/" + dy)

            print("Date : " + str(date))
        else:
            index = page_a_content.index(' Developments - ')
            date = parse(page_a_content[index + 1])

        day = date.strftime('%d')
        month = date.strftime('%m')
        year = date.strftime('%Y')

        writer.writerow({'Date': str(year+"/"+month+"/"+day), 'Price': veg})
        # writer.writerow({'File': str(file),'Price': veg})
        print("------------------------------------------------------")

    print(count)