## Energy

### Work and Kinetic Energy

\begin{gather}
v^2 = v_0^2 + 2a\Delta{x} \\
mv^2 = mv_0^2 + 2ma\Delta{x} \\
\frac{1}{2}mv^2 - \frac{1}{2}mv_0^2 = F\Delta{x}
\end{gather}


$$
K = \frac{1}{2}mv^2
$$

Work is the product of force in the direction of displacement times displacement.


$$
W_{\text{net}} = \Delta{K}
$$



Now, we will use vector calculus to resolve a more complete picture of work in the case of an arbitrary curvilinear path.

\begin{align*}
\vec{F} &= m\vec{a} \\
\vec{F}\cdot\diff{\vec{r}} &= m\vec{a}\cdot\diff{\vec{r}} \\
\int_C{\vec{F}\cdot\diff{\vec{r}}} &= \int_C{m\vec{a}\cdot\diff{\vec{r}}} \\
&= m\int_C{\vec{a}\cdot\diff{\vec{r}}} \\
&= m\int_C{\vec{a}\cdot \deriv{\vec{r}}{t}\diff{t} } \\
&= m\int_C{\vec{a}\cdot \vec{v}\, \diff{t} } \\
&= m\int_C{\deriv{\vec{v}}{t}\cdot \vec{v}\, \diff{t} } \\
&= m\int_C{\vec{v}\cdot\diff{\vec{v}}} \\
&= m\int_C{v\cos\theta\,\diff{v}} \\
&= m\int_C{v \, \diff{v}} \\
&= \frac{m}{2}\left(v^2 - v_0^2\right)
\end{align*}

We now have a mathematical definition of work that applies to a broader range of situations:


$$
W = \int_C{\vec{F}\cdot\diff{\vec{r}}}
$$


### Potential Energy



If $\vec{F}_{\text{cons}}$ is a conservative force, then it obeys the constraint

$$
\oint_C{\vec{F}_{\text{cons}}\cdot\diff{\vec{r}}} = 0
$$
