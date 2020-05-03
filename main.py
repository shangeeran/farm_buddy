from flask import Flask, escape, request, jsonify
import json

from predict.predict import Predict

# __name__ = '__main__'
app = Flask(__name__)


@app.route('/')
def main():
    data = {'Version': 1.0, 'Name': 'FarmBuddy Crops Prices'}
    paths = []
    paths.append('/crops')
    links = {'Info': data, 'Paths': paths}
    return jsonify(links)


@app.route('/crops',methods=['GET'])
def crops():
    cist = crop_list
    links = {"Total_crops":len(cist),"Predication":cist}
    return jsonify(links)


predict_obj = Predict()
crop_list = predict_obj.all()

if __name__ == '__main__':
    app.run(port=8080)