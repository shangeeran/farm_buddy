from keras.models import load_model
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

new_model = load_model("Updated_Prediction_Models/Beans.h5")
dataSet = pd.read_csv('new_data/Beans.csv')

dataSet=dataSet.iloc[:,1:2]

from sklearn.preprocessing import MinMaxScaler

scaler = MinMaxScaler()

# fitting the training set into scaler object
scaler.fit(dataSet)

scaled_test = scaler.transform(dataSet)

n_inputs = 60
n_features = 1

test_predictions = []

# taking the last 60 prices to predict the next output
first_eval_batch = scaled_test[-n_inputs:]

# reshaping this to 3d array
current_batch = first_eval_batch.reshape((1, n_inputs, n_features))

for i in range(20):
    # predicting the output by passing the currebt_batch
    current_prediction = new_model.predict(current_batch)[0]

    # appending the prediction to the test_predictions array
    test_predictions.append(current_prediction)

    # updating the current_batch
    current_batch = np.append(current_batch[:, 1:, :], [[current_prediction]], axis=1)


true_predictions = scaler.inverse_transform(test_predictions)
true_prediction_average = sum(true_predictions) / 20

print("Predicted Average Beans Price : " + str(true_prediction_average[0]))

print("")


new_model = load_model("Updated_Prediction_Models/Brinjal.h5")
dataSet = pd.read_csv('new_data/Brinjal.csv')

dataSet=dataSet.iloc[:,1:2]

from sklearn.preprocessing import MinMaxScaler

scaler = MinMaxScaler()

# fitting the training set into scaler object
scaler.fit(dataSet)

scaled_test = scaler.transform(dataSet)

n_inputs = 60
n_features = 1

test_predictions = []

# taking the last 60 prices to predict the next output
first_eval_batch = scaled_test[-n_inputs:]

# reshaping this to 3d array
current_batch = first_eval_batch.reshape((1, n_inputs, n_features))

for i in range(20):
    # predicting the output by passing the currebt_batch
    current_prediction = new_model.predict(current_batch)[0]

    # appending the prediction to the test_predictions array
    test_predictions.append(current_prediction)

    # updating the current_batch
    current_batch = np.append(current_batch[:, 1:, :], [[current_prediction]], axis=1)


true_predictions = scaler.inverse_transform(test_predictions)
true_prediction_average = sum(true_predictions) / 20

print("Predicted Average Brinjal Price : " + str(true_prediction_average[0]))
print("")

new_model = load_model("Updated_Prediction_Models/Cabbage.h5")
dataSet = pd.read_csv('new_data/Cabbage.csv')

dataSet=dataSet.iloc[:,1:2]

from sklearn.preprocessing import MinMaxScaler

scaler = MinMaxScaler()

# fitting the training set into scaler object
scaler.fit(dataSet)

scaled_test = scaler.transform(dataSet)

n_inputs = 60
n_features = 1

test_predictions = []

# taking the last 60 prices to predict the next output
first_eval_batch = scaled_test[-n_inputs:]

# reshaping this to 3d array
current_batch = first_eval_batch.reshape((1, n_inputs, n_features))

for i in range(20):
    # predicting the output by passing the currebt_batch
    current_prediction = new_model.predict(current_batch)[0]

    # appending the prediction to the test_predictions array
    test_predictions.append(current_prediction)

    # updating the current_batch
    current_batch = np.append(current_batch[:, 1:, :], [[current_prediction]], axis=1)


true_predictions = scaler.inverse_transform(test_predictions)
true_prediction_average = sum(true_predictions) / 20

print("Predicted Average Cabbage Price : " + str(true_prediction_average[0]))
print("")

new_model = load_model("Updated_Prediction_Models/Carrot.h5")
dataSet = pd.read_csv('new_data/Carrot.csv')

dataSet=dataSet.iloc[:,1:2]

from sklearn.preprocessing import MinMaxScaler

scaler = MinMaxScaler()

# fitting the training set into scaler object
scaler.fit(dataSet)

scaled_test = scaler.transform(dataSet)

n_inputs = 60
n_features = 1

test_predictions = []

# taking the last 60 prices to predict the next output
first_eval_batch = scaled_test[-n_inputs:]

# reshaping this to 3d array
current_batch = first_eval_batch.reshape((1, n_inputs, n_features))

for i in range(20):
    # predicting the output by passing the currebt_batch
    current_prediction = new_model.predict(current_batch)[0]

    # appending the prediction to the test_predictions array
    test_predictions.append(current_prediction)

    # updating the current_batch
    current_batch = np.append(current_batch[:, 1:, :], [[current_prediction]], axis=1)


true_predictions = scaler.inverse_transform(test_predictions)
true_prediction_average = sum(true_predictions) / 20

print("Predicted Average Carrot Price : " + str(true_prediction_average[0]))
print("")
new_model = load_model("Updated_Prediction_Models/Coconut.h5")
dataSet = pd.read_csv('new_data/Coconut.csv')

dataSet=dataSet.iloc[:,1:2]

from sklearn.preprocessing import MinMaxScaler

scaler = MinMaxScaler()

# fitting the training set into scaler object
scaler.fit(dataSet)

scaled_test = scaler.transform(dataSet)

n_inputs = 60
n_features = 1

test_predictions = []

# taking the last 60 prices to predict the next output
first_eval_batch = scaled_test[-n_inputs:]

# reshaping this to 3d array
current_batch = first_eval_batch.reshape((1, n_inputs, n_features))

for i in range(20):
    # predicting the output by passing the currebt_batch
    current_prediction = new_model.predict(current_batch)[0]

    # appending the prediction to the test_predictions array
    test_predictions.append(current_prediction)

    # updating the current_batch
    current_batch = np.append(current_batch[:, 1:, :], [[current_prediction]], axis=1)


true_predictions = scaler.inverse_transform(test_predictions)
true_prediction_average = sum(true_predictions) / 20

print("Predicted Average Coconut Price : " + str(true_prediction_average[0]))

print("")
new_model = load_model("Updated_Prediction_Models/Potatoes.h5")
dataSet = pd.read_csv('new_data/Potatoes.csv')

dataSet=dataSet.iloc[:,1:2]

from sklearn.preprocessing import MinMaxScaler

scaler = MinMaxScaler()

# fitting the training set into scaler object
scaler.fit(dataSet)

scaled_test = scaler.transform(dataSet)

n_inputs = 60
n_features = 1

test_predictions = []

# taking the last 60 prices to predict the next output
first_eval_batch = scaled_test[-n_inputs:]

# reshaping this to 3d array
current_batch = first_eval_batch.reshape((1, n_inputs, n_features))

for i in range(20):
    # predicting the output by passing the currebt_batch
    current_prediction = new_model.predict(current_batch)[0]

    # appending the prediction to the test_predictions array
    test_predictions.append(current_prediction)

    # updating the current_batch
    current_batch = np.append(current_batch[:, 1:, :], [[current_prediction]], axis=1)


true_predictions = scaler.inverse_transform(test_predictions)
true_prediction_average = sum(true_predictions) / 20

print("Predicted Average Potatoes Price : " + str(true_prediction_average[0]))
print("")
new_model = load_model("Updated_Prediction_Models/Pumpkin.h5")
dataSet = pd.read_csv('new_data/Pumpkin.csv')

dataSet=dataSet.iloc[:,1:2]

from sklearn.preprocessing import MinMaxScaler

scaler = MinMaxScaler()

# fitting the training set into scaler object
scaler.fit(dataSet)

scaled_test = scaler.transform(dataSet)

n_inputs = 60
n_features = 1

test_predictions = []

# taking the last 60 prices to predict the next output
first_eval_batch = scaled_test[-n_inputs:]

# reshaping this to 3d array
current_batch = first_eval_batch.reshape((1, n_inputs, n_features))

for i in range(20):
    # predicting the output by passing the currebt_batch
    current_prediction = new_model.predict(current_batch)[0]

    # appending the prediction to the test_predictions array
    test_predictions.append(current_prediction)

    # updating the current_batch
    current_batch = np.append(current_batch[:, 1:, :], [[current_prediction]], axis=1)


true_predictions = scaler.inverse_transform(test_predictions)
true_prediction_average = sum(true_predictions) / 20

print("Predicted Average Pumpkin Price : " + str(true_prediction_average[0]))
print("")

new_model = load_model("Updated_Prediction_Models/RedOnion.h5")
dataSet = pd.read_csv('new_data/Red-Onions.csv')

dataSet=dataSet.iloc[:,1:2]

from sklearn.preprocessing import MinMaxScaler

scaler = MinMaxScaler()

# fitting the training set into scaler object
scaler.fit(dataSet)

scaled_test = scaler.transform(dataSet)

n_inputs = 60
n_features = 1

test_predictions = []

# taking the last 60 prices to predict the next output
first_eval_batch = scaled_test[-n_inputs:]

# reshaping this to 3d array
current_batch = first_eval_batch.reshape((1, n_inputs, n_features))

for i in range(20):
    # predicting the output by passing the currebt_batch
    current_prediction = new_model.predict(current_batch)[0]

    # appending the prediction to the test_predictions array
    test_predictions.append(current_prediction)

    # updating the current_batch
    current_batch = np.append(current_batch[:, 1:, :], [[current_prediction]], axis=1)


true_predictions = scaler.inverse_transform(test_predictions)
true_prediction_average = sum(true_predictions) / 20

print("Predicted Average Red Onion Price : " + str(true_prediction_average[0]))

print("")

new_model = load_model("Updated_Prediction_Models/Tomatoes.h5")
dataSet = pd.read_csv('new_data/Tomatoes.csv')

dataSet=dataSet.iloc[:,1:2]

from sklearn.preprocessing import MinMaxScaler

scaler = MinMaxScaler()

# fitting the training set into scaler object
scaler.fit(dataSet)

scaled_test = scaler.transform(dataSet)

n_inputs = 20
n_features = 1

test_predictions = []

# taking the last 60 prices to predict the next output
first_eval_batch = scaled_test[-n_inputs:]

# reshaping this to 3d array
current_batch = first_eval_batch.reshape((1, n_inputs, n_features))

for i in range(20):
    # predicting the output by passing the currebt_batch
    current_prediction = new_model.predict(current_batch)[0]

    # appending the prediction to the test_predictions array
    test_predictions.append(current_prediction)

    # updating the current_batch
    current_batch = np.append(current_batch[:, 1:, :], [[current_prediction]], axis=1)


true_predictions = scaler.inverse_transform(test_predictions)
true_prediction_average = sum(true_predictions) / 20

print("Predicted Average Tomatoes Price : " + str(true_prediction_average[0]))







