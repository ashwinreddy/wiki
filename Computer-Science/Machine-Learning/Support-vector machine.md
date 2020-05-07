A **support-vector machine** is a binary classifier with a linear decision boundary called the maximum margin hyperplane for $(\vec{x}_1, y_1), \dots, (\vec{x}_n, y_n)$ with $y_i \in \\{+1,-1\\}$. The decision boundary is given by the following equation.

\begin{equation}
\vec{w}\cdot\vec{x} + w_0 = 0\tag{Decision boundary}
\end{equation}

Then the predictions are given by computing the sign of the functional margin.

Functional margin
: \begin{equation}
\tilde{\gamma}_i := y_i(\vec{w}\cdot\vec{x} + w_0) \tag{Functional margin}
\end{equation}

Geometrical margin
: \begin{equation}\gamma_i = {\tilde{\gamma_i} \over \lVert\vec{w}\rVert}\end{equation}

# Hard-Margin SVM

The hard-margin SVM can only be used if the data really are linearly separable.

\begin{equation}
\min \frac{1}{2} \lVert \vec{w}\rVert^2
\end{equation}