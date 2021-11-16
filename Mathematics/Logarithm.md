A **logarithm** (**log** for short) is the [[inverse function]] of an [[exponential function]], meaning for a choice of base $b > 0$,

\begin{equation}
b^{\log_b a } \equiv a
\end{equation}


Common bases are 2, $e$, and 10. To write these succinctly, we can use $\lg$, $\ln$, and $\log$, respectively. However, all logarithms are equivalent up to a factor, which allows us to use one of these common bases in any scenario.

\begin{equation}
\log_b x = \frac{\ln x}{\ln b} \tag{Change of Base}
\end{equation}

We can easily verify it is true with more familiar exponential rules:

$$
x = \left(e^{\ln b}\right)^{\ln x \over \ln b }
$$

The logarithm in any base of 0 is undefined.


# Properties

$$
\log(ab) = \log(a) + \log(b)
$$

The log of products is the sum of logs.

\begin{equation}
\log \prod_i x_i = \sum_i \log x_i
\end{equation}

* [[Monotonic function]]

Log is strictly [[concave function]]