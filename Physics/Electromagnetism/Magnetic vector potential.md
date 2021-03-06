The **magnetic vector potential** is a kind of artificial potential in the form of a [[vector field]] we can give to the [[magnetic field]]. In particular, it generates the [[magnetic field]] through a [[curl]].

\begin{equation}
\nabla \times \mathbf{A} \equiv \mathbf{B}
\end{equation}


However, we are free to choose what we want $\nabla\cdot\mathbf{A}$ to be, and the choice is called **fixing the gauge**. It can help us write [[Maxwell's equations]] nicely.

The Maxwell-Faraday equation is then

\begin{align}
0 &= \nabla\times\mathbf{E} + \pdv{\mathbf{B}}{t} \\\\
&= \nabla\times\mathbf{E} + \pdv{}{t}\left(\nabla \times \mathbf{A}\right) \\\\
&= \nabla\times\left(\mathbf{E} + \dot{\mathbf{A}} \right)
\end{align}

So we introduce a potential $\varphi$ such that

$$
-\nabla \varphi = \mathbf{E} + \dot{\mathbf{A}}
$$

Compactly,

\begin{align}
\mathbf{E} &= -\nabla\varphi - \pdv{\mathbf{A}}{t} \\\\
\mathbf{B} &= \nabla \times \mathbf{A}
\end{align}