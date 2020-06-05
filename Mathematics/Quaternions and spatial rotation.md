[[Quaternions|quaternion]] can be used to describe [[3D rotations|3D rotation group]]. Let's say we have a vector $v \in \RR^3$ and we want to rotate it through an angle $\alpha$ around $\hat{n}$. The result will be given by

$$
\vec{v}' = q \vec{v} q^{-1}, \qquad q = \cos \frac{\alpha}{2} + \vec{n} \sin \frac{\alpha}{2}
$$

Both $q$ and its [[antipode|Antipodal points]] $-q$ will execute the same rotation under this conjugation application. This makes the quaternions a double cover for the rotations. Since unit quaternions belong to $SU(2)$,

\begin{equation}
SU(2) /\mathbb{Z}_2 \cong SO(3)
\end{equation}