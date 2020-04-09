A system is controllable if we can go from any initial state to any final state. Consider a linear time invariant [[state space representation]]. The state space is dimension $n$ and the action space is dimension $m$. So $A$ is $n \times n$ and $B$ is $n \times m$

Construct a matrix

$$
C = \begin{bmatrix} B & AB & \dots & A^{n-2}B & A^{n-1}B \end{bmatrix}
$$

If $\operatorname{rank} C = n$, the system is controllable.