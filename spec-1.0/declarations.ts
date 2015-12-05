import  MetaModel = require("../definition-system/metamodel")
import  Sys = require("./systemTypes")
import  datamodel=require("./datamodel")
import  common=require("./common")
/////////////////////////////////
// GENERIC GLOBAL DECLARATIONS

export class AnnotationTypeDeclaration extends common.RAMLLanguageElement implements Sys.DeclaresDynamicType<AnnotationTypeDeclaration>{
    name:string
    $name=[
        MetaModel.key(),
        MetaModel.description("Name of this annotation type")
    ]

    usage: string

    parameters:datamodel.TypeDeclaration[];
    $parameters=[
        MetaModel.setsContextValue("fieldOrParam",true),
        MetaModel.declaringFields(),
        MetaModel.setsContextValue("locationKind",datamodel.LocationKind.APISTRUCTURE),
        MetaModel.setsContextValue("location",datamodel.ModelLocation.ANNOTATION),
        MetaModel.description("Declarations of parameters allowed in this annotation type"),
        // TODO: value descriptions should be removed when possible
        MetaModel.valueDescription("An object whose property names are the parameter names the annotation expects and whose values are their data types.")
    ];

    allowMultiple:boolean;
    $allowMultiple=[
        MetaModel.description("Whether multiple instances of annotations of this type may be applied simultaneously at the same location")
    ];

    allowedTargets:AnnotationTarget[]
    $allowedTargets=[
        MetaModel.oneOf(
            [
                "API",
                "DocumentationItem",
                "Resource",
                "Method",
                "Response",
                "RequestBody",
                "ResponseBody",
                "TypeDeclaration",
                "NamedExample",
                "ResourceType",
                "Trait",
                "SecurityScheme",
                "SecuritySchemeSettings",
                "AnnotationTypeDeclaration",
                "Library",
                "Overlay",
                "Extension"
            ]

        ),
        MetaModel.description("Restrictions on where annotations of this type can be applied. If this property is specified, annotations of this type may only be applied on a property corresponding to one of the target names specified as the value of this property."),
        MetaModel.valueDescription("An array of names (or a single name) from the list of Target Names in the [[raml-10-spec-target-locations-table|Target Locations table]]  below. ")
    ]

    $displayName = [ MetaModel.description("An alternate, human-friendly name for the annotation") ]

    $description = [
        MetaModel.description("A longer, human-friendly description of the annotation"),
        MetaModel.valueDescription("Markdown string")
    ]

    $usage = [
        MetaModel.description("Instructions on how and when to use this annotation in a RAML spec."),
        MetaModel.valueDescription("Markdown string")
    ]

    //On the design level every annotation usage is instantiation of subclass of particular AnnotationTypeDeclaration
    //on the runtime level it is just Annotation (which is abstract on  the design level)
    //this inheritance strangeness happens because we do not want bring AnnotationTypeDeclaration fields to Annotation
    //TODO think about it
    $=[
        MetaModel.declaresSubTypeOf("Annotation")
    ]
}
export class AnnotationRef extends Sys.Reference<AnnotationTypeDeclaration>{
    // TODO: this should have more info on Annotations and their usage
    $=[
        MetaModel.description("Annotations allow you to attach information to your API"),
        MetaModel.tags(['annotations'])
    ]
}

export class AnnotationTarget extends Sys.ValueType{
    $=[
        // TODO: enum
        MetaModel.description("Elements to which this Annotation can be applied (enum)"),
        MetaModel.tags(['annotations'])
    ]
}



//This type does not exist on RAML design level (basically it's design level counter part is AnnotationRef)
export class Annotation<T>{
    name:string

    $name=[MetaModel.key()]
}
