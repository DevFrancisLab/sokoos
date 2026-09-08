import importlib
import importlib.util
import os

from django.conf import settings
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    help = "Print non-sensitive CORS runtime diagnostics."

    def handle(self, *args, **options):
        cors_spec = importlib.util.find_spec("corsheaders")
        cors_module = None
        if cors_spec is not None:
            cors_module = importlib.import_module("corsheaders")

        settings_module_name = os.environ.get("DJANGO_SETTINGS_MODULE", "<unset>")
        settings_module = importlib.import_module(settings_module_name)
        middleware = list(getattr(settings, "MIDDLEWARE", []))
        cors_middleware = "corsheaders.middleware.CorsMiddleware"
        allowed_origins = list(getattr(settings, "CORS_ALLOWED_ORIGINS", []))

        self.stdout.write(f"settings_module={settings_module_name}")
        self.stdout.write(f"settings_file={getattr(settings_module, '__file__', '<unknown>')}")
        self.stdout.write(f"corsheaders_importable={cors_spec is not None}")
        self.stdout.write(
            f"corsheaders_package={getattr(cors_module, '__file__', '<not-imported>')}"
        )
        self.stdout.write(f"cors_allowed_origins={allowed_origins!r}")
        self.stdout.write(f"cors_middleware_configured={cors_middleware in middleware}")
        self.stdout.write(f"cors_middleware_index={middleware.index(cors_middleware) if cors_middleware in middleware else -1}")
