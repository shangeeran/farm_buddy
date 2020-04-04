from keras.models import load_model
import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler
import time


class Predict:
    beans_model = ""
    beans_csv = ""

    brinjal_model = ""
    brinjal_csv = ""

    cabbage_model = ""
    cabbage_csv = ""

    carrot_model=""
    carrot_csv=""

    def __init__(self):
        self.beans_model = load_model("models/Beans.h5")
        self.beans_csv = pd.read_csv('csv/Beans.csv')

        self.brinjal_model = load_model("models/Brinjal.h5")
        self.brinjal_csv = pd.read_csv('csv/Brinjal.csv')

        self.cabbage_model = load_model("models/Cabbage.h5")
        self.cabbage_csv = pd.read_csv('csv/Cabbage.csv')

        self.carrot_model=load_model("models/Carrot.h5")
        self.carrot_csv =pd.read_csv('csv/Carrot.csv')

    def beans(self):
        new_model = self.beans_model
        dataSet = self.beans_csv

        dataSet = dataSet.iloc[:, 1:2]

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

        # print("Predicted Average Beans Price : " + str(true_prediction_average[0]))

        return round(true_prediction_average[0])

    def brinjal(self):
        new_model = self.brinjal_model
        dataSet = self.brinjal_csv

        dataSet = dataSet.iloc[:, 1:2]

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

        return round(true_prediction_average[0])

    def cabbage(self):
        new_model = self.cabbage_model
        dataSet = self.cabbage_csv
        dataSet = dataSet.iloc[:, 1:2]

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

        return round(true_prediction_average[0])

    def carrot(self):
        new_model = self.carrot_model
        dataSet = self.carrot_csv

        dataSet = dataSet.iloc[:, 1:2]

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

        return round(true_prediction_average[0])

    def all(self):
        beans = self.beans()
        brinjal = self.brinjal()
        cabbage = self.cabbage()
        carrot = self.carrot()


        list_crop = [{
            "Crop": "Beans",
            "Crop_code": "CR-001",
            "Month": time.strftime("%Y-%m"),
            "Price": beans
        },{
                    "Crop": "Brinjal",
                    "Crop_code": "CR-002",
                    "Month": time.strftime("%Y-%m"),
                    "Price": brinjal
        },
        {
                    "Crop": "Cabbage",
                    "Crop_code": "CR-003",
                    "Month": time.strftime("%Y-%m"),
                    "Price": cabbage
            },
            {
                "Crop": "Carrot",
                "Crop_code": "CR-004",
                "Month": time.strftime("%Y-%m"),
                "Price": carrot
            }
        ]
        print(list_crop)

        return list_crop

