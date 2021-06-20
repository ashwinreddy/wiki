**Quaternions** are 4-dimensional [[complex numbers|complex number]], predecessors of the more modern notion of a vector. 

$$
q = w + x \mathrm{i} + y \mathrm{j} + z \mathrm{k}
$$

There is no way to naturally extend the concept of the [[imaginary unit]] to 3D space. The key equation in the inception of complex numbers came from Sir William Rowan Hamilton, who realized the importance of 4D space:

\begin{equation}
\mathrm{i}^2 = \mathrm{j}^2 = \mathrm{k}^2 = \mathrm{ijk} = -1 \tag{Hamilton}
\end{equation}



[[_TOC_]]

# Operations

Identity quaternion
: $(0, 0, 0, -1)$

Magnitude
: $\lVert q \rVert = \sqrt{x^2 + y^2 + z^2 + w^2}$

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