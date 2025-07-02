import { Color4 } from "@dcl/sdk/math"
import ReactEcs, { ReactEcsRenderer, UiEntity, Button } from "@dcl/sdk/react-ecs"

export function showUi() {
    let isVisibleFlexContainer: boolean = true

    ReactEcsRenderer.setUiRenderer(() => [
    
    // This doesn't work right on the new explorer, after hiding the black and red rectangles, when they are shown again they are in the wrong position
    <UiEntity uiTransform={{ width: '100%', height: '50%', flexDirection: 'column' }}>
        <Button uiTransform={{ width: '50%', height: '50%' }} value="CLICK ME (bool && <component/>) --- This should be on the TOP" onMouseDown={() => { isVisibleFlexContainer = !isVisibleFlexContainer }} />
        {isVisibleFlexContainer && <UiEntity  uiTransform={{ display: 'flex', flexDirection: 'row', width: '50%', height: '50%' }}>
            <UiEntity uiText={{value: "This should be on the LEFT"}} uiBackground={{ color: Color4.Black() }} uiTransform={{ width: '100%', height: '100%' }} />
            <UiEntity uiText={{value: "This should be on the RIGHT"}} uiBackground={{ color: Color4.Red() }} uiTransform={{ width: '100%', height: '100%' }} />
        </UiEntity>}
    </UiEntity>,
    
    // This works fine (the issue is still seen during development when the app hot reloads, but it doesn't happen when running the scene normally without reloading anything)
    // The workaround that makes it work is:
    // Instead of using something like `isVisible && Component`, have a display field inside Component's uiTransform set to: `isVisible ? 'flex' : 'none'`
    <UiEntity uiTransform={{ width: '100%', height: '50%', flexDirection: 'column' }}>
        <Button uiTransform={{ width: '50%', height: '50%' }} value="CLICK ME (bool && <component/>) --- This should be on the TOP" onMouseDown={() => { isVisibleFlexContainer = !isVisibleFlexContainer }} />
        <UiEntity  uiTransform={{ display: isVisibleFlexContainer ? 'flex' : 'none' , flexDirection: 'row', width: '50%', height: '50%' }}>
            <UiEntity uiText={{value: "This should be on the LEFT"}} uiBackground={{ color: Color4.Black() }} uiTransform={{ width: '100%', height: '100%' }} />
            <UiEntity uiText={{value: "This should be on the RIGHT"}} uiBackground={{ color: Color4.Red() }} uiTransform={{ width: '100%', height: '100%' }} />
        </UiEntity>
    </UiEntity>
    ])
}
