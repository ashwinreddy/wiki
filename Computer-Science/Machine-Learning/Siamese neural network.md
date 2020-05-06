A **Siamese neural network** takes two inputs and pushes them in parallel with the same weights to a latent space. It is trained to put inputs in the same class together and inputs of different classes far apart using contrastive loss or triplet loss, etc.

[[https://miro.medium.com/max/1400/1*p42h4mhKBBxUw5pnO3R_cw.jpeg|height=300px,align=center]]

# Contrastive loss

Let $f$ be the network and $x_1$ and $x_2$ be the two inputs. Let $D_w$ be the distance between the outputs. The loss is

$$
(1-Y)\cdot\frac{D_W^2}{2} + Y\cdot\frac{\left(\max(0, m - D_W)\right)^2}{2}
$$

where $Y$ is 0 if they are from the same class and 1 otherwise and $m$ is the margin.