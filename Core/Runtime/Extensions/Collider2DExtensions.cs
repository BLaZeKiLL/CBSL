using UnityEngine;

namespace CBSL.Core.Extensions {

    public static class Collider2DExtensions {

        public static bool IsGrounded(this Collider2D collider, LayerMask layerMask, Vector2 direction, float distance = 0.1f, float angle = 0f) {
            var bounds = collider.bounds;
            
            var result = Physics2D.BoxCast(bounds.center, bounds.size, angle,
                direction, distance, layerMask);

            return result.collider != null;
        }

    }

}