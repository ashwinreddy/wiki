**$k$-nearest neighbor (_k_-NN)** is an unsupervised learning algorithm where you use the $k$ nearest neighbors to either assign a class or output a regression.

1. Store training set
2. Given a new test point, find the $k$ points closest to the training set using some metric
3. Take a vote with the classes of the $k$ neighbors to predict the class of the new point

The only issue is picking a metric, since Euclidean might not be the best choice.