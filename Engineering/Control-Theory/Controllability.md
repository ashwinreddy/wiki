A system is controllable if we can go from any initial state to any final state. Consider a linear time invariant [[state space representation]]. The state space is dimension $n$ and the action space is dimension $m$. So $A$ is $n \times n$ and $B$ is $n \times m$. With a little algebra, you'll find that

$$
\vec{x}(t) = A^t\vec{x}(0) + \begin{bmatrix} B & AB & \dots & A^{t-2}B & A^{t-1}B \end{bmatrix} \cdot \begin{bmatrix} \vec{u}(t-1) \\ \vec{u}(t-2) \\ \vdots \\ \vec{u}(1) \\ \vec{u}(0)\end{bmatrix}
$$

Since we can choose the 

Construct a $n \times nm$ matrix.

$$
\mathscr{C} = \begin{bmatrix} B & AB & \dots & A^{n-2}B & A^{n-1}B \end{bmatrix}
$$


If $C$ is full rank, (i.e. $\operatorname{rank} C = n$) [^rank] the system is controllable.

[^rank]: Full means $\operatorname{rank}(C) = \min(n, mn) = n$.