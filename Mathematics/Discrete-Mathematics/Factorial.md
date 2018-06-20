For $n \in \mathbb{Z}$,

\begin{equation}
n! = \prod_{j=1}^n{j} 
\end{equation}

The factorial can be recursively defined
\begin{equation}
n! = n(n-1)!
\end{equation}

# Code Examples
## Python
```py
factorial = lambda x: 1 if x <= 1 else x * factorial(x-1)
```