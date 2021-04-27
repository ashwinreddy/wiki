The **Taylor series** of a function is a [[polynomial]] [[series]] approximation to the function centered at $x_0$ using only derivatives at $x_0$.

\begin{equation}
f(x) \simeq \sum_{k=0}^\infty {f^{(k)}(x_0) \over k!}(x-x_0)^k
\end{equation}

The special case of a Taylor series around 0 is called a **Maclaurin series**, which simplifies the expressions a bit:

\begin{equation}
f(x) \simeq \sum_{k=0}^\infty f^{(k)}(0) \frac{x^k}{k!} \tag{Maclaurin Series}
\end{equation}

In many applications, a quadratic approximation tends to be "good enough."

\begin{equation}
f(x) \approx f(x_0) + f'(x_0)(x-x_0) + \frac{1}{2}f''(x_0)(x-x_0)^2
\end{equation}

# Common Series

$$
e^x = \sum_{k=0}^\infty \frac{x^k}{k!}
$$

$$
{1 \over 1 - x} = \sum_{k=0}^\infty x^k
$$