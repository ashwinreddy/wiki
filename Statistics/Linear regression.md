**Linear regression** is finding the parameters to a linear model for some data.

$$
y = ax + b
$$

We can use [[ordinary least squares]] to find a solution. It corresponds to 

\begin{align}
a &= \frac{S_{xy}}{S_{xx}} \\\\
b &= \bar{y} - \bar{x}a
\end{align}