# Types and Examples of Series

## Geometric Series

\begin{equation}
\sum_{n=0}^\infty{x^n} = \frac{1}{1-x}, \qquad |x| < 1
\end{equation}

## Power Series

### Taylor Series

The Taylor series represents smooth functions as polynomials. The Maclaurin series are the subset of Taylor series evaluated at 0.

\begin{equation}
f(x) = \sum_{n=0}^\infty{\frac{\mathcal{D}^n f(a)}{n!}(x-a)^n}, \qquad f \in \mathcal{C}^\infty
\end{equation}

#### Examples

\begin{equation}
e^x = \sum_{n=0}^\infty{\frac{x^n}{n!}} \qquad x \in \mathbb{C}
\end{equation}

## Fourier Series

\begin{equation}
f(x) = \sum_{n=0}^\infty{a_n\sin(nx)+b_n\cos(nx)}
\end{equation}