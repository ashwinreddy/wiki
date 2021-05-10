The **mutual information** between [[random variables|random variable]] $X$ and $Y$ is given by measuring how inefficient it is to pretend that $X$ and $Y$ are totally [[independence]]. Two variables have no mutual information, then, if they are independent; and the harder it is to pretend they are independent, the more mutual information they have.

\begin{equation}
I(X ; Y ) = D_{KL}( p_{(X, Y)} \parallel p_X p_Y )
\end{equation}

It is connected to [[entropy]].

$$
I(X; Y) = \mathcal{H}(X) - \mathcal{H}(X \mid Y)
$$

# Properties

* Mutual information is clearly symmetric. $$I(X ; Y) = I(Y; X)$$