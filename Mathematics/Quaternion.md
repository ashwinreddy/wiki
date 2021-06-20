**Quaternions** are 4-dimensional [[complex numbers|complex number]], predecessors of the more modern notion of a vector. Where complex numbers are a 2D space, the quaternions form a 4D space as there is no way to naturally extend the concept of the [[imaginary unit]] to 3D space. The key equation in the inception of complex numbers came from Sir William Rowan Hamilton, who realized the importance of 4D space:

\begin{equation}
i^2 = j^2 = k^2 = ijk = -1 \tag{Hamilton}
\end{equation}

This equation defines the basis elements for the quaternions, which we now define by

\begin{equation}
\mathbb{H} \doteq \mathbb{R} + \mathbb{R}i +\mathbb{R}j + \mathbb{R}k
\end{equation}

[[_TOC_]]

# Operations

## Multiplication

Includes [[dot product]] and [[cross product]]

$$
(r_1, \vec{v}_1) \cdot (r_2, \vec{v}_2) = (r_1r_2 - \vec{v}_1\cdot\vec{v}_2, r_1 \vec{v}_2 + r_2\vec{v}_1 + \vec{v}_1 \times \vec{v}_2)
$$

# Rotations

A quaternion can be used to compute a rotation in 3D, although it is a little wonky.

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

# Resources

* [[https://fexpr.blogspot.com/2014/03/the-great-vectors-versus-quaternions.html]]
* [[https://www.quantamagazine.org/the-strange-numbers-that-birthed-modern-algebra-20180906/]]