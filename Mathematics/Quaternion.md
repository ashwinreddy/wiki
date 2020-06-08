**Quaternions** are an extension of complex numbers and the predecessors of the more modern notion of a vector. In a eureka moment by Sir William Rowan Hamilton, the quaternions are defined by the multiplication of its basis elements provided by the equation

\begin{equation}
i^2 = j^2 = k^2 = ijk = -1 \tag{Hamilton}
\end{equation}

# Rotations

A quaternion can be used to compute a rotation in 3D, although it is a little wonky.

\begin{equation}
\operatorname{Rotation in 3D}: \RR^3 \times \overbrace{\RR^3 \times \RR}^{\mathbb{H}} \to \RR^3
\end{equation}

If one wants to rotate vector $q$ by quaternion $u$, one has to compute

\begin{equation}
v' = q v q^{-1} \tag{Rotation by Conjugation}
\end{equation}

The other caveat is that the angle is off by a factor of two:

\begin{equation}
q = \cos \frac{\theta}{2} + u \sin \frac{\theta}{2}
\end{equation}