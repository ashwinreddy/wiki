The **cross product** is a [[binary operation]] that's only really available in $\RR^3$ that generates an orthogonal pseudovector whose length is the area spanned by its operands. It satisfies the Lie bracket conditions.

\begin{equation}
\vec{a}\times\vec{b} = \hat{n} \lVert \vec{a} \rVert \lVert \vec{b} \rVert \sin\theta
\end{equation}

There is some ambiguity here because there are two orthogonal versions, we pick the one based on the right-hand rule.


# Computation

A useful mnemonic is

\begin{equation}
\vec{a}\times\vec{b} = \begin{vmatrix} {\hat{\imath}} & \hat{\jmath} & \hat{k} \\\\\ a_1 & a_2 & a_3 \\\\\ b_1 & b_2 & b_3 \end{vmatrix}
\end{equation}


\begin{equation}
[\vec{a}]_{\times} = \begin{bmatrix}0 & -a_3 & a_2 \\\\\ a_3 & 0 & -a_1 \\\\\ -a_2 & a_1 & 0\end{bmatrix}
\end{equation}