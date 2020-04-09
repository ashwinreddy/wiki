A **state-space representation** models a physical system using input, output, and state variables with a first-order differential or difference equation. 




|Type|Continuous|Discrete|
|-----|----------|--------|
|Generic|$\dv{}{t}f(\vec{x}(t))$|$f(\vec{x}[t])$|
|LTI|$\dv{}{t}\vec{x}(t) = A\vec{x}(t) + B\vec{u}(t)$|$\vec{x}[t+1]=A\vec{x}[t]+B\vec{u}[t]$|

An **equilibrium point** for a constant input $\vec{u}$ is an $\vec{x}$ such that the right hand side is zero.