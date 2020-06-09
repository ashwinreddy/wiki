In higher dimensions, a "small step" requires a direction: the **directional derivative** is an expansion to the derivative that handles this.

\begin{equation}
D_\vec{v} f(\vec{x}) = \lim_{t \to 0}\frac{f(\vec{x} + t\vec{v}) - f(\vec{x})}{t}
\end{equation}

A [[partial derivative]] is given by having $\vec{v}$ purely in the direction of one input variable.

\begin{equation}
D_\vec{v} f(\vec{x}) = \vec\nabla f(\vec{x}) \cdot \vec{v} = \sum_i v_i \pdv{f}{x_i}
\end{equation}