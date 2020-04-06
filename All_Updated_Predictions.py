from keras.models import load_model
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

new_model = load_model("Updated_Prediction_Models/Beans.h5")
dataSet = pd.read_csv('new_data/Beans.csv')

# splitting into training set and test set and converting to 2d numpy array
train = dataSet.iloc[:824, 1:2]
test = dataSet.iloc[824:, 1:2]

from sklearn.preprocessing import MinMaxScaler

# creating minmaxscaler object
scaler = MinMaxScaler()

# fitting the training set into scaler object
scaler.fit(train)

# normalizing the datset
scaled_train = scaler.transform(train)
scaled_test = scaler.transform(test)

n_inputs = 60
n_features = 1

test_predictions = []

# taking the last 60 prices to predict the next output
first_eval_batch = scaled_train[-n_inputs:]

# reshaping this to 3d array
current_batch = first_eval_batch.reshape((1, n_inputs, n_features))

# how far we can predict?
# loop to predict the test prediction
for i in range(len(test)):
    # predicting the output by passing the currebt_batch
    current_prediction = new_model.predict(current_batch)[0]

    # appending the prediction to the test_predictions array
    test_predictions.append(current_prediction)

    # updating the current_batch
    current_batch = np.append(current_batch[:, 1:, :], [[current_prediction]], axis=1)

true_predictions = scaler.inverse_transform(test_predictions)
true_prediction_average = sum(true_predictions) / 20
test = np.array(test)
true_price_average = sum(test) / 20
error = ((true_price_average[0] - true_prediction_average[0]) / true_price_average[0]) * 100
if (error < 0):
    error *= -1
print(
    "----------------------------------------------------------------------------------------------------------------")
print("True Average Beans Price : " + str(true_price_average[0]))
print("")
print("Predicted Average Beans Price : " + str(true_prediction_average[0]))
print("")
print("Error : " + str(error))
print("")
print("Accuracy : " + str(100 - error))

print(
    "------------------------------------------------------------------------------------------------------------------")
new_model = load_model("Updated_Prediction_Models/Brinjal.h5")
dataSet = pd.read_csv('new_data/Brinjal.csv')

# splitting into training set and test set and converting to 2d numpy array
train = dataSet.iloc[:827, 1:2]
test = dataSet.iloc[827:, 1:2]

from sklearn.preprocessing import MinMaxScaler

# creating minmaxscaler object
scaler = MinMaxScaler()

# fitting the training set into scaler object
scaler.fit(train)

# normalizing the datset
scaled_train = scaler.transform(train)
scaled_test = scaler.transform(test)

n_inputs = 60
n_features = 1

test_predictions = []

# taking the last 60 prices to predict the next output
first_eval_batch = scaled_train[-n_inputs:]

# reshaping this to 3d array
current_batch = first_eval_batch.reshape((1, n_inputs, n_features))

# how far we can predict?
# loop to predict the test prediction
for i in range(len(test)):
    # predicting the output by passing the currebt_batch
    current_prediction = new_model.predict(current_batch)[0]

    # appending the prediction to the test_predictions array
    test_predictions.append(current_prediction)

    # updating the current_batch
    current_batch = np.append(current_batch[:, 1:, :], [[current_prediction]], axis=1)

true_predictions = scaler.inverse_transform(test_predictions)
true_prediction_average = sum(true_predictions) / 20
test = np.array(test)
true_price_average = sum(test) / 20
error = ((true_price_average[0] - true_prediction_average[0]) / true_price_average[0]) * 100
if (error < 0):
    error *= -1
print(
    "----------------------------------------------------------------------------------------------------------------")
print("True Average Brinjal Price : " + str(true_price_average[0]))
print("")
print("Predicted Average Brinjal Price : " + str(true_prediction_average[0]))
print("")
print("Error : " + str(error))
print("")
print("Accuracy : " + str(100 - error))

print(
    "------------------------------------------------------------------------------------------------------------------")
new_model = load_model("Updated_Prediction_Models/Cabbage.h5")
dataSet = pd.read_csv('new_data/Cabbage.csv')

# splitting into training set and test set and converting to 2d numpy array
train = dataSet.iloc[:827, 1:2]
test = dataSet.iloc[827:, 1:2]

from sklearn.preprocessing import MinMaxScaler

# creating minmaxscaler object
scaler = MinMaxScaler()

# fitting the training set into scaler object
scaler.fit(train)

# normalizing the datset
scaled_train = scaler.transform(train)
scaled_test = scaler.transform(test)

n_inputs = 60
n_features = 1

test_predictions = []

# taking the last 60 prices to predict the next output
first_eval_batch = scaled_train[-n_inputs:]

# reshaping this to 3d array
current_batch = first_eval_batch.reshape((1, n_inputs, n_features))

# how far we can predict?
# loop to predict the test prediction
for i in range(len(test)):
    # predicting the output by passing the currebt_batch
    current_prediction = new_model.predict(current_batch)[0]

    # appending the prediction to the test_predictions array
    test_predictions.append(current_prediction)

    # updating the current_batch
    current_batch = np.append(current_batch[:, 1:, :], [[current_prediction]], axis=1)

true_predictions = scaler.inverse_transform(test_predictions)
true_prediction_average = sum(true_predictions) / 20
test = np.array(test)
true_price_average = sum(test) / 20
error = ((true_price_average[0] - true_prediction_average[0]) / true_price_average[0]) * 100
if (error < 0):
    error *= -1
print(
    "----------------------------------------------------------------------------------------------------------------")
print("True Average Cabbage Price : " + str(true_price_average[0]))
print("")
print("Predicted Average Cabbage Price : " + str(true_prediction_average[0]))
print("")
print("Error : " + str(error))
print("")
print("Accuracy : " + str(100 - error))

print(
    "------------------------------------------------------------------------------------------------------------------")
new_model = load_model("Updated_Prediction_Models/Carrot1.h5")
dataSet = pd.read_csv('new_data/Carrot.csv')

# splitting into training set and test set and converting to 2d numpy array
train = dataSet.iloc[:820, 1:2]
test = dataSet.iloc[820:, 1:2]

from sklearn.preprocessing import MinMaxScaler

# creating minmaxscaler object
scaler = MinMaxScaler()

# fitting the training set into scaler object
scaler.fit(train)

# normalizing the datset
scaled_train = scaler.transform(train)
scaled_test = scaler.transform(test)

n_inputs = 60
n_features = 1

test_predictions = []

# taking the last 60 prices to predict the next output
first_eval_batch = scaled_train[-n_inputs:]

# reshaping this to 3d array
current_batch = first_eval_batch.reshape((1, n_inputs, n_features))

# how far we can predict?
# loop to predict the test prediction
for i in range(len(test)):
    # predicting the output by passing the currebt_batch
    current_prediction = new_model.predict(current_batch)[0]

    # appending the prediction to the test_predictions array
    test_predictions.append(current_prediction)

    # updating the current_batch
    current_batch = np.append(current_batch[:, 1:, :], [[current_prediction]], axis=1)

true_predictions = scaler.inverse_transform(test_predictions)
true_prediction_average = sum(true_predictions) / 20
test = np.array(test)
true_price_average = sum(test) / 20
error = ((true_price_average[0] - true_prediction_average[0]) / true_price_average[0]) * 100
if (error < 0):
    error *= -1
print(
    "----------------------------------------------------------------------------------------------------------------")
print("True Average Carrot Price : " + str(true_price_average[0]))
print("")
print("Predicted Average Carrot Price : " + str(true_prediction_average[0]))
print("")
print("Error : " + str(error))
print("")
print("Accuracy : " + str(100 - error))

print(
    "------------------------------------------------------------------------------------------------------------------")


new_model = load_model("Updated_Prediction_Models/Coconut.h5")
dataSet = pd.read_csv('new_data/Coconut.csv')

# splitting into training set and test set and converting to 2d numpy array
train = dataSet.iloc[:824, 1:2]
test = dataSet.iloc[824:, 1:2]

from sklearn.preprocessing import MinMaxScaler

# creating minmaxscaler object
scaler = MinMaxScaler()

# fitting the training set into scaler object
scaler.fit(train)

# normalizing the datset
scaled_train = scaler.transform(train)
scaled_test = scaler.transform(test)

n_inputs = 60
n_features = 1

test_predictions = []

# taking the last 60 prices to predict the next output
first_eval_batch = scaled_train[-n_inputs:]

# reshaping this to 3d array
current_batch = first_eval_batch.reshape((1, n_inputs, n_features))

# how far we can predict?
# loop to predict the test prediction
for i in range(len(test)):
    # predicting the output by passing the currebt_batch
    current_prediction = new_model.predict(current_batch)[0]

    # appending the prediction to the test_predictions array
    test_predictions.append(current_prediction)

    # updating the current_batch
    current_batch = np.append(current_batch[:, 1:, :], [[current_prediction]], axis=1)

true_predictions = scaler.inverse_transform(test_predictions)
true_prediction_average = sum(true_predictions) / 20
test = np.array(test)
true_price_average = sum(test) / 20
error = ((true_price_average[0] - true_prediction_average[0]) / true_price_average[0]) * 100
if (error < 0):
    error *= -1
print(
    "----------------------------------------------------------------------------------------------------------------")
print("True Average Coconut Price : " + str(true_price_average[0]))
print("")
print("Predicted Average Coconut Price : " + str(true_prediction_average[0]))
print("")
print("Error : " + str(error))
print("")
print("Accuracy : " + str(100 - error))

print(
    "------------------------------------------------------------------------------------------------------------------")


new_model = load_model("Updated_Prediction_Models/Potatoes.h5")
dataSet = pd.read_csv('new_data/Potatoes.csv')

# splitting into training set and test set and converting to 2d numpy array
train = dataSet.iloc[:715, 1:2]
test = dataSet.iloc[715:, 1:2]

from sklearn.preprocessing import MinMaxScaler

# creating minmaxscaler object
scaler = MinMaxScaler()

# fitting the training set into scaler object
scaler.fit(train)

# normalizing the datset
scaled_train = scaler.transform(train)
scaled_test = scaler.transform(test)

n_inputs = 60
n_features = 1

test_predictions = []

# taking the last 60 prices to predict the next output
first_eval_batch = scaled_train[-n_inputs:]

# reshaping this to 3d array
current_batch = first_eval_batch.reshape((1, n_inputs, n_features))

# how far we can predict?
# loop to predict the test prediction
for i in range(len(test)):
    # predicting the output by passing the currebt_batch
    current_prediction = new_model.predict(current_batch)[0]

    # appending the prediction to the test_predictions array
    test_predictions.append(current_prediction)

    # updating the current_batch
    current_batch = np.append(current_batch[:, 1:, :], [[current_prediction]], axis=1)

true_predictions = scaler.inverse_transform(test_predictions)
true_prediction_average = sum(true_predictions) / 20
test = np.array(test)
true_price_average = sum(test) / 20
error = ((true_price_average[0] - true_prediction_average[0]) / true_price_average[0]) * 100
if (error < 0):
    error *= -1
print(
    "----------------------------------------------------------------------------------------------------------------")
print("True Average Potatoes Price : " + str(true_price_average[0]))
print("")
print("Predicted Average Potatoes Price : " + str(true_prediction_average[0]))
print("")
print("Error : " + str(error))
print("")
print("Accuracy : " + str(100 - error))

print(
    "------------------------------------------------------------------------------------------------------------------")

new_model = load_model("Updated_Prediction_Models/Pumpkin.h5")
dataSet = pd.read_csv('new_data/Pumpkin.csv')

# splitting into training set and test set and converting to 2d numpy array
train = dataSet.iloc[:825, 1:2]
test = dataSet.iloc[825:, 1:2]

from sklearn.preprocessing import MinMaxScaler

# creating minmaxscaler object
scaler = MinMaxScaler()

# fitting the training set into scaler object
scaler.fit(train)

# normalizing the datset
scaled_train = scaler.transform(train)
scaled_test = scaler.transform(test)

n_inputs = 60
n_features = 1

test_predictions = []

# taking the last 60 prices to predict the next output
first_eval_batch = scaled_train[-n_inputs:]

# reshaping this to 3d array
current_batch = first_eval_batch.reshape((1, n_inputs, n_features))

# how far we can predict?
# loop to predict the test prediction
for i in range(len(test)):
    # predicting the output by passing the currebt_batch
    current_prediction = new_model.predict(current_batch)[0]

    # appending the prediction to the test_predictions array
    test_predictions.append(current_prediction)

    # updating the current_batch
    current_batch = np.append(current_batch[:, 1:, :], [[current_prediction]], axis=1)

true_predictions = scaler.inverse_transform(test_predictions)
true_prediction_average = sum(true_predictions) / 20
test = np.array(test)
true_price_average = sum(test) / 20
error = ((true_price_average[0] - true_prediction_average[0]) / true_price_average[0]) * 100
if (error < 0):
    error *= -1
print(
    "----------------------------------------------------------------------------------------------------------------")
print("True Average Pumpkin Price : " + str(true_price_average[0]))
print("")
print("Predicted Average Pumpkin Price : " + str(true_prediction_average[0]))
print("")
print("Error : " + str(error))
print("")
print("Accuracy : " + str(100 - error))

print(
    "------------------------------------------------------------------------------------------------------------------")

new_model = load_model("Updated_Prediction_Models/RedOnion.h5")
dataSet = pd.read_csv('new_data/Red-Onions.csv')

# splitting into training set and test set and converting to 2d numpy array
train = dataSet.iloc[:769, 1:2]
test = dataSet.iloc[769:, 1:2]

from sklearn.preprocessing import MinMaxScaler

# creating minmaxscaler object
scaler = MinMaxScaler()

# fitting the training set into scaler object
scaler.fit(train)

# normalizing the datset
scaled_train = scaler.transform(train)
scaled_test = scaler.transform(test)

n_inputs = 60
n_features = 1

test_predictions = []

# taking the last 60 prices to predict the next output
first_eval_batch = scaled_train[-n_inputs:]

# reshaping this to 3d array
current_batch = first_eval_batch.reshape((1, n_inputs, n_features))

# how far we can predict?
# loop to predict the test prediction
for i in range(len(test)):
    # predicting the output by passing the currebt_batch
    current_prediction = new_model.predict(current_batch)[0]

    # appending the prediction to the test_predictions array
    test_predictions.append(current_prediction)

    # updating the current_batch
    current_batch = np.append(current_batch[:, 1:, :], [[current_prediction]], axis=1)

true_predictions = scaler.inverse_transform(test_predictions)
true_prediction_average = sum(true_predictions) / 20
test = np.array(test)
true_price_average = sum(test) / 20
error = ((true_price_average[0] - true_prediction_average[0]) / true_price_average[0]) * 100
if (error < 0):
    error *= -1
print(
    "----------------------------------------------------------------------------------------------------------------")
print("True Average Red Onion Price : " + str(true_price_average[0]))
print("")
print("Predicted Average Red Onion Price : " + str(true_prediction_average[0]))
print("")
print("Error : " + str(error))
print("")
print("Accuracy : " + str(100 - error))

print(
    "------------------------------------------------------------------------------------------------------------------")


new_model = load_model("Updated_Prediction_Models/Tomatoes.h5")
dataSet = pd.read_csv('new_data/Tomatoes.csv')

# splitting into training set and test set and converting to 2d numpy array
train = dataSet.iloc[:827, 1:2]
test = dataSet.iloc[827:, 1:2]

from sklearn.preprocessing import MinMaxScaler

# creating minmaxscaler object
scaler = MinMaxScaler()

# fitting the training set into scaler object
scaler.fit(train)

# normalizing the datset
scaled_train = scaler.transform(train)
scaled_test = scaler.transform(test)

n_inputs = 20
n_features = 1

test_predictions = []

# taking the last 60 prices to predict the next output
first_eval_batch = scaled_train[-n_inputs:]

# reshaping this to 3d array
current_batch = first_eval_batch.reshape((1, n_inputs, n_features))

# how far we can predict?
# loop to predict the test prediction
for i in range(len(test)):
    # predicting the output by passing the currebt_batch
    current_prediction = new_model.predict(current_batch)[0]

    # appending the prediction to the test_predictions array
    test_predictions.append(current_prediction)

    # updating the current_batch
    current_batch = np.append(current_batch[:, 1:, :], [[current_prediction]], axis=1)

true_predictions = scaler.inverse_transform(test_predictions)
true_prediction_average = sum(true_predictions) / 20
test = np.array(test)
true_price_average = sum(test) / 20
error = ((true_price_average[0] - true_prediction_average[0]) / true_price_average[0]) * 100
if (error < 0):
    error *= -1
print(
    "----------------------------------------------------------------------------------------------------------------")
print("True Average Tomatoes Price : " + str(true_price_average[0]))
print("")
print("Predicted Average Tomatoes Price : " + str(true_prediction_average[0]))
print("")
print("Error : " + str(error))
print("")
print("Accuracy : " + str(100 - error))

print(
    "------------------------------------------------------------------------------------------------------------------")


