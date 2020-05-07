A **support-vector machine** is a binary classifier with a linear decision boundary called the maximum margin hyperplane for $(\vec{x}_1, y_1), \dots, (\vec{x}_n, y_n)$ with $y_i \in \\{+1,-1\\}$. The decision boundary is given by the hyperplane $\vec{w}\cdot\vec{x} + w_0 = 0$ but we have an arbitrary choice of multiplying both sides by $c$ (**n.b** might have to constrain this to be not equal to 0, greater than 0 or smt). If we pick $\vec{c} = \lVert \vec{w} \rVert^{-1}$,

\begin{equation}
\frac{\vec{w}}{\lVert \vec{w} \rVert}\cdot\vec{x} + \frac{w_0}{\lVert \vec{w} \rVert} = 0\tag{Decision boundary}
\end{equation}



Then the predictions are given by computing the sign of the functional margin.

Functional margin
: \begin{equation}
\tilde{\gamma}_i := y_i(\vec{w}\cdot\vec{x} + w_0) \tag{Functional margin}
\end{equation}

Geometrical margin
: \begin{equation}\gamma_i = {\tilde{\gamma_i} \over \lVert\vec{w}\rVert}\end{equation}

# Formulation

## Hard-Margin SVM

The hard-margin SVM can only be used if the data really are linearly separable.

\begin{equation}
\min \frac{1}{2} \lVert \vec{w}\rVert^2 \text{ subject to } y_i \left( \vec{w}\cdot\vec{x}_i + w_0 \right) \geq 1
\end{equation}

## Soft-Margin SVM

If the data are not linearly separable, we can allow misclassification with a penalty.

# Comparison to Gaussian Process Classifier