An **autoencoder** is a [[artificial neural network]] that can learns to compress data and (also how to decompress it). This is done by training an encoder and decoder to learn the [[identity function]] end-to-end.

$$
\mathsf{autoencoder} = \arg\min_{\mathsf{decode} \\ \mathsf{encode}} \lVert x - (\mathsf{decode} \circ \mathsf{encode})(x) \rVert
$$

[[https://miro.medium.com/max/3148/1*44eDEuZBEsmG_TCAKRI3Kw@2x.png|align=center]]

One issue with autoencoders is that the network decides how to use the latent space. For example, here is MNIST visualized

[[https://miro.medium.com/max/1000/1*-i8cp3ry4XS-05OWPAJLPg.png]]

If you sample the gray point as a latent code, you might not get a sensible output. The latent space needs to be made continuous, which is what [[variational autoencoder]] does.