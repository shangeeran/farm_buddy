import pandas as pd
import numpy as np
import tensorflow as tf
import matplotlib.pyplot as plt
#imported the libraries

#reading the dataset from csv file
dataSet=pd.read_csv('../Datasets/Carrot.csv')
print(len(dataSet)-20)

#splitting into training set and test set and converting to 2d numpy array
train=dataSet.iloc[:781,1:2]
test=dataSet.iloc[781:,1:2]

#importing minmaxscakler to normalise the dataset
from sklearn.preprocessing import MinMaxScaler

#creating minmaxscaler object
scaler=MinMaxScaler()

#fitting the training set into scaler object
scaler.fit(train)

#normalizing the datset
scaled_train=scaler.transform(train)
scaled_test=scaler.transform(test)


#importing  Timeseries generator
from keras.preprocessing.sequence import TimeseriesGenerator

# n_inputs=60
# n_features=1
#
# generator=TimeseriesGenerator(scaled_train,scaled_train,length=n_inputs,batch_size=1)

#importing all the libraries to built the model
from keras.models import Sequential
from keras.layers import Dense
from keras.layers import LSTM
from keras.layers import Dropout

n_inputs=60
n_features=1

#passing the inputs into timesereies generator object
train_generator=TimeseriesGenerator(scaled_train,scaled_train,length=n_inputs,batch_size=1)

#creating sequential object
model=Sequential()

#creating  the input layer and 2  hidden layer with 150 neurones with rectifier function
model.add(LSTM(150,activation='relu',return_sequences=True,input_shape=(n_inputs,n_features)))
model.add(Dropout(0.2))
model.add(LSTM(150,activation='relu',return_sequences=True))
model.add(Dropout(0.2))
model.add(LSTM(150,activation='relu'))
model.add(Dropout(0.2))
model.add(Dense(1))
model.compile(optimizer='adam',loss='mse')

model.summary()

#fitting
model.fit_generator(train_generator,epochs=110)

# #calculating loss of the model
model.history.history.keys()
my_loss=model.history.history['loss']
plt.plot(range(len(my_loss)),my_loss)
plt.show()





test_predictions=[]

#taking the last 60 prices to predict the next output
first_eval_batch=scaled_train[-n_inputs:]

#reshaping this to 3d array
current_batch=first_eval_batch.reshape((1,n_inputs,n_features))

#how far we can predict?
#loop to predict the test prediction
for i in range(len(test)):

    #predicting the output by passing the currebt_batch
    current_prediction=model.predict(current_batch)[0]

    #appending the prediction to the test_predictions array
    test_predictions.append(current_prediction)

    #updating the current_batch
    current_batch=np.append(current_batch[:,1:,:],[[current_prediction]],axis=1)

true_predictions=scaler.inverse_transform(test_predictions)


real_beans_price=test
test["Predictions"]=true_predictions
print(test)

model.save("../PredictionModels/Carrots4.h5")


