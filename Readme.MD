Indian real estate data is from
https://www.kaggle.com/datasets/arvanshul/gurgaon-real-estate-99acres-com

And locally it is saved in Data folder under current directory of program.

Data considered for modeling are PROPERTY_TYPE, CITY, OWNTYPE, FACING, AGE, CLASS, MAX_PRICE, PRICE_SQFT, MAX_AREA_SQFT, MAP_DETAILS.

After data clean up we split data into 2 Training set and test set. We then apply Ridge model. The model is run in two ways. Firstly, only numeric data is used to predict price per square feet and in the second model we use one-hot-encoding to make use of non-numeric data as well to arrive at predictions for price per square feet.
We then look at the features that have maximum influnce on pricing and we gather that location (indicated by latitude and longitude) plays the most important role in price per unit area.