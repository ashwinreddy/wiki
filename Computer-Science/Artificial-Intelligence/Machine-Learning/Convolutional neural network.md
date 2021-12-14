A **convolutional neural network (CNN)** is a [[artificial neural network]] that has convolutional layers. It is shiftinvariant It performs a [[convolution]].

Filter
: A small [[matrix]] with learnable values that we will slide over the input

For example, a typical filter on a ConvNet might have size $5 \times 5 \times 3$.

A `Conv2d` layer has number of parameters $\order{nk^2}$ for $n$ filters of $k \times k$ size on input $L \times L$.

The number of parameters in a convolutional layer is $k(s + 1)$ where $k$ is number of filters and $s$ is filter size

# Pooling

A pooling layer does [[downsampling]], reducing spatial dimensions. It also uses a sliding window, but rather than taking a dot product, it either computes a max (was a feature found in this window) or an average (reduce outlier in this window).
