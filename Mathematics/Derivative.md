The **derivative** is a measure of local (around a point $a$) rate of change for a [[function]]. It is the one dimensional [[gradient]]. An example that is familiar to everyone is [[velocity]] $v$ as the derivative of position $x(t)$. This can be computed by letting a little bit of time $\Delta t$ pass at a time $t$ and measuring the change over that interval. In the [[limit]],

\begin{equation}
\label{eq:vel}
v(t) = \lim_{\Delta t \to 0}\frac{x(t+ \Delta t) - x(t)}{\Delta t}
\end{equation}


Equation \ref{eq:vel} is equivalently

\begin{equation}
\lim_{\Delta t \to 0}\frac{x(t+ \Delta t) - x(t) - v(t)\Delta t}{\Delta t} = 0
\end{equation}

This tells us that if we pick a small enough $\Delta t$, 

\begin{equation}
x(t + \Delta t)\approx x(t) + v(t)\Delta t
\end{equation}

# Notation

From Equation \ref{eq:vel}, Leibniz came up with the mathematical notation.

\begin{equation}
v = \dv{x}{t}
\end{equation}

# Properties

* [[Linear map]]