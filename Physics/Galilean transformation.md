A **Galilean transformation** describes how to switch between two reference frames. In what ways can two reference frames differ?

|Difference|Parameter|Dimension|Description|
|:--------|----------|---------|-----------|
|Velocity|$\vec{v}$|3|One may be moving w.r.t. the other.|
|Rotation|$\vec\theta = (\theta_x, \theta_y, \theta_z)$|3|One may be rotated w.r.t. the other.|
|Origin|$(\Delta\vec{r}, \Delta t)$|4|They may differ in their origins. |

Now, we just collect these into one object.

|||
|-------------|-------------------------------------------------|--|--------------------------------------|
|Galilean Group|$(\vec{v}, \vec\theta, \Delta\vec{r}, \Delta t)$|10|Any difference between reference frames|


Typically, we consider a "stationary" reference frame and a "moving" reference frame (physics tells us that there is no such thing as a stationary reference frame, but intuitively we may spot or pick one). The moving frame has primed coordinates. We can always orient the coordinate systems so that the motion is one direction. Then, the only disagreement is in that first coordinate.

\begin{align}
x' &= x - vt \\\\\
t' &= t
\end{align}

This is a linear transformation!

\begin{equation}
\begin{bmatrix} x' \\\\\ t' \end{bmatrix} = \begin{bmatrix} 1 & -v \\\\\ 0 & 1 \end{bmatrix} \begin{bmatrix} x \\\\\ t \end{bmatrix}
\end{equation}
