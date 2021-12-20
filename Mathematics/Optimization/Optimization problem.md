A (mathematical) **optimization problem** takes the form

$$
\begin{aligned}
\min \quad & f_0(x) \\
\textrm{s.t.} \quad & f_i(x) \leqslant b_i, \quad \forall i \in [m]
\end{aligned}
$$

where $x = (x_1, \dots, x_n)$ is the **optimization variable**, $f_0: \RR^n \to \RR$ is the **objective function** and the $f_i: \RR^n \to \RR$ are the inequality **constraint functions**. The constants $b_1, \dots, b_m$ are the limits/bounds. 