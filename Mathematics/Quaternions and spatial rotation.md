[[Quaternions|quaternion]] can be used to describe [[3D rotations|3D rotation group]]. Let's say we have a vector $v \in \RR^3$ and we want to rotate it through an angle $\alpha$ around $\hat{n}$. The result will be given by

$$
\vec{v}' = q \vec{v} q^{-1}, \qquad q = \cos \frac{\alpha}{2} + \vec{n} \sin \frac{\alpha}{2}
$$