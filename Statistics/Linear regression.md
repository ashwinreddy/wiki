**Linear regression** is finding the parameters to a linear model for some data.

$$
y_n = \beta x_n + \alpha + \epsilon_n
$$

We can use [[ordinary least squares]] to find a solution. It corresponds to 

\begin{align}
\beta &= \frac{S_{xy}}{S_{xx}} \\\\
\alpha &= \bar{y} - \bar{x}\beta
\end{align}

where $S_{xy} = \sum_{i=1}^n (x - \bar{x})(y - \bar{y})$ and $S_{yy}$ and $S_{xx}$ are defined correspondingly.

$$
R = \frac{S_{y \hat{y} }}{ \sqrt{S_{yy} S_{\hat{y} \hat{y}} } }
$$

This is also easily seen through a [[linear least squares estimation]].