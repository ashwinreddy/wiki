A **support-vector machine** is a binary classifier with a linear decision boundary called the maximum margin hyperplane for $(\vec{x}_1, y_1), \dots, (\vec{x}_n, y_n)$ with $y_i \in \\{+1,-1\\}$. The decision boundary is given by

\begin{equation}
\vec{w}\cdot\vec{x} + w_0 = 0\tag{Decision boundary}
\end{equation}

Then the predictions are given by computing the sign of

\begin{equation}
\tilde{\gamma}_i := y_i(\vec{w}\cdot\vec{x} + w_0) \tag{Functional margin}
\end{equation}

