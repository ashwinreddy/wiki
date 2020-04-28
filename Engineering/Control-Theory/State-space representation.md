A **state-space representation** models a physical system using input, output, and state variables with a first-order differential or difference equation. 



# Controllable Canonical Form

$$
A_c = \begin{bmatrix} 0 & 1 & 0 & \dots & 0 \\ \vdots & 0 & 1 & \ddots & \vdots \\ \vdots & & \ddots & \ddots & 0 \\ 0 & \dots & \dots & 0 & 1 \\ a_1 & a_2 & \dots & a_{n-1} & a_n\end{bmatrix},\quad B_c = \begin{bmatrix} 0 \\ \vdots \\ \vdots \\ 0 \\ 1 \end{bmatrix}
$$

[[characteristic polynomial]]

$$
\det(\lambda I - A_c) = \lambda^n - a_n \lambda^{n-1} - a_{n-1}\lambda^{n-2} - \dots - a_2 \lambda - a_1.
$$