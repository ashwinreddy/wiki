**Arc length** is the distance between points on a curve. When we zoom in, we can pretend like the curve is a line so that a infinitesimal arc length-ette $\dd{s}$ can be given by looking at a right triangle:

\begin{equation}
\dd{s}^2 = \dd{x}^2 + \dd{y}^2 \implies \dd{s} = \sqrt{\dd{x}^2 + \dd{y}^2}
\end{equation}

Now we just need to figure out how to add up the little parts appropriately.

\begin{equation}
s = \int \sqrt{\dd{s}^2}
\end{equation}

Computationally, the trick is to multiply by identity via $\dv{x}{x}$.

\begin{equation}
s = \int_a^b \sqrt{1 + \left(\dv{y}{x}\right)^2} \dd{x}
\end{equation}