The **cross product** is a [[binary operation]] for [[vectors|vector]] in $\RR^3$ that generates an orthogonal pseudovector whose length is the area spanned by its operands. It satisfies the Lie bracket conditions.

\begin{equation}
\vec{a}\times\vec{b} = \hat{n} \cdot ab \sin\theta
\end{equation}

There is some ambiguity here because there are two orthogonal versions, we pick the one based on the right-hand rule.


# Computation

The raw computation is

$$
a \times b = \begin{bmatrix} a_2 b_3 - a_3 b_2 \\\\\ a_3b_1 - a_1 b_3 \\\\\ a_1b_2 - a_2b_1 \end{bmatrix}
$$

Notice that it's linear in $b$, so

\begin{equation}
[\vec{a}]_{\times} = \begin{bmatrix}0 & -a_3 & a_2 \\\\\ a_3 & 0 & -a_1 \\\\\ -a_2 & a_1 & 0\end{bmatrix}
\end{equation}

A useful mnemonic is

\begin{equation}
\vec{a}\times\vec{b} = \begin{vmatrix} {\hat{\imath}} & \hat{\jmath} & \hat{k} \\\\\ a_1 & a_2 & a_3 \\\\\ b_1 & b_2 & b_3 \end{vmatrix}
\end{equation}

Naturally, the [[Levi-Civita symbol]] shows up.