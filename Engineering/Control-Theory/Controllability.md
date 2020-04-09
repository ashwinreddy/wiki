A system is controllable if we can go from any initial state to any final state. Formally,

Controllable
: A system is controllable if for every $x\_{\text{target}} \in \RR^n$, there exists a sequence of inputs $\vec{u}(0), \dots, \vec{u}(t-1)$ from any initial state $\vec{x}(0)$ to get to $\vec{x}\_{\text{target}}$.


Consider a linear time invariant [[state space representation]]. The state space is dimension $n$ and the action space is dimension $m$. So $A$ is $n \times n$ and $B$ is $n \times m$. With a little algebra, you'll find that

Construct a $n \times nm$ matrix.

$$
\mathscr{C} = \begin{bmatrix} B & AB & \dots & A^{n-2}B & A^{n-1}B \end{bmatrix}
$$



If $\mathscr{C}$ is full rank, (i.e. $\operatorname{rank} \mathscr{C} = n$) [^rank] the system is controllable.

[^rank]: Full means $\operatorname{rank}(\mathscr{C}) = \min(n, mn) = n$.