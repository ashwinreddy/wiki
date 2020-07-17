A generic optimal control problem is 

\begin{array}{ll}
\mbox{maximize}_{u\_t} & \mathbb{E}\_{e_t}[ \sum_{t=0}^N R_t[x_t,u_t] ]\\
\mbox{subject to} &	x_{t+1} = f(x_t, u_t, e_t)\\
& \mbox{($x_0$ given).}
\end{array}