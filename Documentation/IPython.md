**IPython** is an interactive Python command shell.

# Embedding

It can be useful to inspect the state of a program at a certain location. Insert the following line if that's what you want to do

```
from IPython import embed; embed()
```

If you want to exit the embedding, killing the program completely use `%exit_raise`