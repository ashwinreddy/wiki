The **wedge product** or **exterior product** takes a $p$-[[differential form]] and a $q$-form and returns a $(p+q)$-form.

We can take the "wedge" of two [[one-forms|one-form]] in the following way:

\begin{align\*}
\omega_1 \wedge \omega_2: T_p M \times T_p M &\to \RR \\\\
(v_1, v_2) &\mapsto \begin{vmatrix}\omega_1(v_1) & \omega_2(v_1) \\\\ \omega_1(v_2) & \omega_2(v_2) \end{vmatrix}
\end{align\*}

This gives us the signed area spanned by the application of the $\omega$'s on the vectors. 

# Properties

Anticommutativity
: $$\omega_1 \wedge \omega_2 = - \omega_2 \wedge \omega_1$$

This property tells us that $\omega \wedge \omega = 0$.