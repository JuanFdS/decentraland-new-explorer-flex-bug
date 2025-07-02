# Decentraland - New Explorer - Sdk7 - Bug: UI components children get reordered on redraw

When creating UI components with the sdk7, if I use a component that orders its children using as its display type 'flex', whenever the component is hidden and then shown again, the children are reordered.

This only seems to happen when the component is hidden by writing it in the style:

```react
{isVisible && <Component/>}
```

However, it doesn't happen if the component is written like this:

```react
{<Component uiTransform={{display: isVisible ? 'flex' : 'none'}}}
```


https://github.com/user-attachments/assets/b50db827-c507-47b1-a246-b45d08c9f8b0

