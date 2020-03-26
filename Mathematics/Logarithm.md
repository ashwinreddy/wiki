\begin{equation}
\ln x = \int_{1}^x \frac{\mathrm{d}u}{u}
\end{equation}

\begin{equation}
\ln' x = \frac{1}{x}
\end{equation}

The log derivative trick is a way of reformulating gradients that might be tricky to compute otherwise

\begin{equation}
\frac{\mathrm{d}f(x)}{\mathrm{d}x} = f(x)\cdot \frac{\mathrm{d}}{\mathrm{d}x}\log f(x)
\end{equation}

\begin{equation}
\sum_{i=1}^n \log{a_i} = \log\left(\prod_{i=1}^n a_i \right)
\end{equation}

# Concavity

If $f(x) = \log x$, $f^{\prime\prime} (x) = -\frac{1}{x^2}$. Over it's domain, $f^{\prime\prime}(x) <0$ so it is concave.