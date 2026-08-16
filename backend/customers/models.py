from django.db import models
from django.db.models import Q


class Customer(models.Model):
    class Relationship(models.TextChoices):
        CONTACT = "contact", "Contact"
        LEAD = "lead", "Lead"
        CUSTOMER = "customer", "Customer"

    class LeadStatus(models.TextChoices):
        NEW = "new", "New"
        COLD = "cold", "Cold"
        WARM = "warm", "Warm"
        HOT = "hot", "Hot"

    class Source(models.TextChoices):
        WHATSAPP = "whatsapp", "WhatsApp"
        WEBSITE = "website", "Website"
        EMAIL = "email", "Email"
        SMS = "sms", "SMS"
        MANUAL = "manual", "Manual"
        IMPORT = "import", "Import"
        GOOGLE_CONTACTS = "google_contacts", "Google Contacts"
        OTHER = "other", "Other"

    business = models.ForeignKey(
        "businesses.Business",
        on_delete=models.CASCADE,
        related_name="customers",
    )
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=50, blank=True)
    email = models.EmailField(blank=True)
    company = models.CharField(max_length=255, blank=True)
    location = models.CharField(max_length=255, blank=True)
    notes = models.TextField(blank=True)
    relationship = models.CharField(
        max_length=20,
        choices=Relationship.choices,
        default=Relationship.CONTACT,
    )
    lead_status = models.CharField(
        max_length=20,
        choices=LeadStatus.choices,
        blank=True,
    )
    source = models.CharField(
        max_length=30,
        choices=Source.choices,
        default=Source.MANUAL,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["business", "phone"],
                condition=~Q(phone=""),
                name="unique_customer_phone_per_business",
            ),
            models.UniqueConstraint(
                fields=["business", "email"],
                condition=~Q(email=""),
                name="unique_customer_email_per_business",
            ),
        ]

    def __str__(self):
        return self.name
