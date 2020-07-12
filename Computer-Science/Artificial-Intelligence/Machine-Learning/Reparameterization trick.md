The **reparameterization trick** is a trick that allows us to backpropagate through random nodes. Formally, it lets us compute the gradient of an expectation with respect to parameters that influence both the sampling and the values.

% <![CDATA[
\begin{align}
\nabla_{\theta} \mathbb{E}_{p_{\theta}(z)}[f_{\theta}(z)] 
&= \nabla_{\theta} \Big[ \int_{z} p_{\theta}(z) f_{\theta}(z) dz \Big] \\
&= \int_{z} \nabla_{\theta} \Big[ p_{\theta}(z) f_{\theta}(z) \Big] dz \\
&= \int_{z} f_{\theta}(z) \nabla_{\theta} p_{\theta}(z) dz + \int_{z} p_{\theta}(z) \nabla_{\theta} f_{\theta}(z) dz \\
&= \underbrace{
    \int_{z} f_{\theta}(z) \nabla_{\theta} p_{\theta}(z) dz}_{\text{What about this?}}
    + \mathbb{E}_{p_{\theta}(z)} \Big[\nabla_{\theta} f_{\theta}(z)\Big]
\end{align} %]]>