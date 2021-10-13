**Receiver operating characteristic (ROC)** is a curve. The $y$-axis is the sensitivity (true positive rate) and the $x$-axis is the specificity (false positive rate).

[[https://glassboxmedicine.files.wordpress.com/2019/02/roc-curve-v2.png|align=center]]

# Algorithm

1. Sort the test instances decreasing by the scores
2. Move down the list (lowering the threshold), processing one instance at a time. For each instance,
3. Compute the TPR and FPR add a point to the plot.

This would take $\order{n \log n}$ time.

# Area under Curve

The area under curve represents the score. It is the probability that a classifier will rank a randomly chosen positive sample higher than a randomly chosen negative sample.

# Properties

* They are insensitive to the balance of classes in the test set