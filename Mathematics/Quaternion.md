**Quaternions** are an extension of [[complex numbers|complex number]] and the predecessors of the more modern notion of a vector. In a eureka moment by Sir William Rowan Hamilton, the quaternions are defined by the multiplication of its basis elements provided by the equation

\begin{equation}
i^2 = j^2 = k^2 = ijk = -1 \tag{Hamilton}
\end{equation}

A generic quaternion looks like

\begin{equation}
q = a + bi + cj + dk
\end{equation}

# Rotations

A quaternion can be used to compute a rotation in 3D, although it is a little wonky.

\begin{equation}
\operatorname{Rotation in 3D}: \overbrace{\RR^3}^{\text{vec}} \times \overbrace{\underbrace{\RR^3}\_{\text{axis}} \times \underbrace{\RR}_{\text{angle}}}^{\mathbb{H}} \to \overbrace{\RR^3}^{\text{rotated vec}} \tag{Rotation Signature}
\end{equation}

So the quaternion encodes the axis $u$ and angle $\theta$ into one package.


\begin{equation}
q = \cos \frac{\theta}{2} + u \sin \frac{\theta}{2}
\end{equation}

If one wants to rotate vector $v$ by quaternion $q$, one has to compute

\begin{equation}
v' = q v q^{-1} \tag{Rotation by Conjugation}
\end{equation}


In pseudocode, we'd have something like the following

```python
def rotate_vector(vector, axis, angle):
    quaternion = cos(angle / 2) + axis * sin(angle / 2)
    return quaternion * vector * inverse(quaternion)
```