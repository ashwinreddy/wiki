A **differential form**. Forms give a natural way to do multivariable calculus.

In the language of differential forms, $\mathrm{d} x$ generates a 1-form from the 0-form $f$.

A 0-form is a smooth scalar function.


A differential 1-form is a covector with bases $\mathrm{d} x^i$. A basic or elementary 1-form is one of the $\mathrm{d} x_i$. As a covector, it takes in a vector and produces a number.

\\[
d x_i (\vec{v}) = v_i
\\]

so that

\\[
\int \vec{F}\cdot d \vec{r} = \int F_x d x + F_y d y + F_z d z
\\]

A 1-form linearly transforms a vector into a real as $a_i d x^i$.


\begin{equation}
v \wedge w \equiv v \otimes w - w \otimes v
\end{equation}

## 1-Form

For $\mathbb{R}^3$, all 1-forms can be written as 

\\[
\alpha = a dx + bdy + cdz
\\]

## 2-Form

For $\mathbb{R}^3$, all 2-forms can be written as 

\\[
\beta = a dy \wedge dz + b dz \wedge dx + c dx \wedge dy
\\]

# Types of Forms

A form $\alpha$ is closed if $d\alpha = 0$. It is exact if $a = d\beta$ for some form $\beta$. Every exact form is closed.