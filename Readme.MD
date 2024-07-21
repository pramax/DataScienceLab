Indian real estate data is from
https://www.kaggle.com/datasets/arvanshul/gurgaon-real-estate-99acres-com

And locally it is saved in Data folder under current directory of program.

Data considered for modeling
0   PROP_ID        9443 non-null   object 
 1   PROPERTY_TYPE  9443 non-null   object 
 2   CITY           9443 non-null   object 
 3   OWNTYPE        9443 non-null   int64  
 4   BEDROOM_NUM    9443 non-null   float64
 5   FURNISH        9443 non-null   int64  
 6   FACING         9443 non-null   int64  
 7   AGE            9443 non-null   int64  
 8   CLASS          9443 non-null   object 
 9   MAX_PRICE      9443 non-null   int64  
 10  PRICE_SQFT     9443 non-null   float64
 11  MAX_AREA_SQFT  9443 non-null   float64
 12  lat            9443 non-null   object 
 13  lon            9443 non-null   object

After data clean up we split data into 2 Training set and test set. We then apply Ridge model. The model is run in two ways. Firstly, only numeric data is used to predict price per square feet and in the second model we use one-hot-encoding to make use of non-numeric data as well to arrive at predictions for price per square feet.
We then look at the features that have maximum influnce on pricing and we gather that location (indicated by latitude and longitude) plays the most important role in price per unit area.